<template>
  <div class="nc-product-form">
    <a-form :form="form" @submit="handleSubmit">
      <div style="display: flex; justify-content: space-between; padding: 24px;">

        <div id="inf-left-block" style="display: flex; flex-direction: column; gap: 16px">
          <a-form-item>
            <a-input
              style="width: 382px"
              has-feedback
              placeholder="Вставьте ссылку на товар"
              v-decorator="[
                  'url',
                  {
                    rules: [{ required: true, type: 'url', trigger: 'blur', message: 'Невалидный URL' }],
                    initialValue: productC.url
                  }
                ]"
            />
          </a-form-item>
          <a-form-item>
            <a-input
              placeholder="Введите название товара"
              v-decorator="['name', { initialValue: productC.name }]"
              style="width: 382px"
            />
          </a-form-item>
        </div>

        <div id="inf-right-block" style="display: flex; flex-direction: column; align-items: center; gap: 16px">

          <!-- prodcat -->
          <a-form-item>
            <a-radio-group
              @change="handleChangeProdcat"
              v-decorator="['prodcatCode', {initialValue: productC.prodcatCode}]"
            >
              <a-radio-button
                v-for="(prodcat, ix) in CST_PRODCAT__ALL"
                :key="prodcat.code"
                :value="prodcat.code"
              >
                {{prodcat.name}}
              </a-radio-button>
            </a-radio-group>
          </a-form-item>

          <!-- prodsubcat -->
          <a-form-item style="margin: 0; padding: 0;">
            <a-select
              style="width: 430px;"
              @change="handleChangeProdsubcat"
              placeholder="Выберите категорию одежды"
              v-decorator="[
                'prodsubcatCode',
                {
                  rules: [{ required: true, trigger: 'blur', message: 'Обязательное поле' }],
                  initialValue: productC.prodsubcatCode
                }
              ]"
            >
              <a-select-option v-for="(prodsubcat) in prodsubcats" :key="prodsubcat.code" :value="prodsubcat.code">
                {{prodsubcat.name}}
              </a-select-option>
            </a-select>
          </a-form-item>

          <!-- size -->
          <a-form-item style="margin: 0; padding: 0;">
            <a-input
              placeholder="Введите размер как он указан на сайте товара"
              style="width: 430px;"
              v-decorator="['size', {initialValue: productC.size}]"
            />
          </a-form-item>

          <!-- color -->
          <a-form-item>
            <a-input
              placeholder="Введите цвет как он указан на сайте товара"
              style="width: 430px;"
              v-decorator="['color', {initialValue: productC.color}]"
            />
          </a-form-item>

          <!-- cost on dollar -->
          <a-form-item>
            <a-input
              suffix="$"
              type="number"
              step="0.01"
              min="0.01"
              max="20000"
              placeholder="Введите цену товара в долларах"
              style="width: 430px;"
              v-decorator="[
                  'costDollar',
                  {
                    rules: [{ required: true, trigger: 'blur', message: 'Обязательное поле' }],
                    initialValue: productC.costDollar ? productC.costDollar.toString() : undefined
                  }
                ]"
            />
          </a-form-item>

          <a-form-item v-if="mtIsNew">
            <a-button type="primary" html-type="submit" style="width: 430px;">
              Добавить к заказу
            </a-button>
          </a-form-item>
          <a-form-item v-else>
            <a-button type="primary" html-type="submit" style="width: 430px;">
              Сохранить
            </a-button>
          </a-form-item>

          <a-form-item v-if="!isInitial">
            <a-button
              style="width: 430px;"
              @click="handleCancel"
            >
              Отмена
            </a-button>
          </a-form-item>

        </div>
      </div>
    </a-form>
  </div>
</template>

<script>
  import { categories, CST_PRODCAT__ALL, CST_PRODCAT__MAN, CST_PRODSUBCAT__JEANS } from '../utils/buslogic';
  import { get, isEmpty } from 'lodash';

  const initialValues = {
    url: '',
    prodcatCode: CST_PRODCAT__MAN.code,
    prodsubcatCode: undefined,
    size: '',
    color: '',
    costDollar: undefined,
    name: ''
  };

  export default {
    props: {
      product: Object,
      isInitial: { type: Boolean, default: true },
    },
    data() {
      return {
        CST_PRODCAT__ALL,
        categoriesC: [],
        productC: { ...initialValues },
        form: this.$form.createForm(this, { name: 'product' })
      }
    },
    created() {
      this.categoriesC = categories;
    },
    computed: {
      prodsubcats() {
        const prodsubcatOjs = this.categoriesC.filter(el => el.prodcat.code === this.productC.prodcatCode)
        return prodsubcatOjs.map(el => el.prodsubcat);
      },
      mtIsNew() {
        return isEmpty(this.product)
      },
    },
    watch: {
      product: {
        immediate: true,
        handler(product) {
          if (product) {
            this.productC = { ...product }
          } else {
            this.productC = { ...initialValues };
          }
        }
      },
    },
    mounted() {
      this.$emit('callbackForm1256', this.resetForm);
      if (this.product) {
        this.productC = { ...this.product }
      } else {
        this.productC = { ...initialValues };
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            const oj = {
              isEditMode: !this.mtIsNew,
              data: values
            };
            if (this.product) {
              oj.data.id = this.product.id;
            }
            this.$emit('product-event-1630', oj);
          } else {
            console.log('!!-!!-!! err {201001182226}\n', err);
          }
        });
      },
      handleChangeProdsubcat(val) {
        this.productC.prodsubcatCode = val;
      },
      handleChangeProdcat(val) {
        this.productC.prodcatCode = val.target.value;
        this.productC.prodsubcatCode = undefined;
        this.form.setFieldsValue({
          prodsubcatCode: undefined
        })
      },
      handleCancel() {
        this.$emit('cancel-event-1516');
      },
      resetForm() {
        this.product = undefined;
        this.productC = { ...initialValues };
        this.form.resetFields();
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
    // outline: 1px solid rgba(0, 0, 0, 0.2);
  }

  .nc-product-form {
    & .ant-form-item {
      margin: 0;
    }
  }
</style>
