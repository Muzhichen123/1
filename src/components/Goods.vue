<template>
  <div class="goods">
    <template v-if="products.length">
      <div class="item" v-for="(item, ind) in products" :key="item.id">
        <img class="img" :src="'https://glpla.github.io/utils' + item.img" alt="">
        <div class="info">
          <h4 class="title">{{ item.name }} <span class="flavour">{{ item.flavour }}</span> </h4>
          <div class="desc">{{ item.desc.repeat(2) }}</div>
          <div class="price">¥{{ item.price }} <span class="price-inner">(市场价<span>¥{{ item.price_original }}</span>)</span> </div>
          <div class="price-discount">预估到手 <span>¥{{ getDiscount(item) }}</span></div>
        </div>
        <div class="btn" @click="addCart(item)">
          <span class="iconfont icon-cart"></span>
        </div>
      </div>
      
    </template>
    <div v-else>null</div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

const products = ref([
  {
    "id": 0,
    "name": "柳州螺蛳粉",
    "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    "img": "/coffee/coffee0.jpg",
    "price_original": 20,
    "price": 14,
    "discount": 0.2,
    "flavour": "辛辣",
    "is_follow": false,
    "stock": 100,
    "cup": [
      { "id": 1, "tag": "中杯", "sel": true },
      { "id": 2, "tag": "大杯", "sel": false },
      { "id": 3, "tag": "超大杯", "sel": false }
    ],
    "ther": [
      { "id": 0, "tag": "热", "sel": false },
      { "id": 1, "tag": "冰", "sel": true }
    ],
    "sugar": [
      { "id": 0, "tag": "半糖", "sel": false },
      { "id": 1, "tag": "标准糖", "sel": false },
      { "id": 2, "tag": "不加糖", "sel": true }
    ],
    "dessert": [
      {
        "id": 1,
        "img": "/dessert/dessert1.png",
        "title": "adipisicing elit",
        "priceOriginal": 5,
        "discount": 0.3
      },
      {
        "id": 2,
        "img": "/dessert/dessert2.png",
        "title": "consectetur elit",
        "priceOriginal": 8,
        "discount": 0.4
      },
      {
        "id": 3,
        "img": "/dessert/dessert3.png",
        "title": "sit amet elit",
        "priceOriginal": 10,
        "discount": 0.5
      }
    ],
    "recommend": [
      {
        "id": 1,
        "img": "/coffee/coffee1.jpg",
        "title": "lorem ipsum dolor",
        "desc": "lorem ipsum dolor sit amet consectetur elit",
        "priceOriginal": 10,
        "discount": 0.5
      },
      {
        "id": 2,
        "img": "/coffee/coffee2.jpg",
        "title": "lorem ipsum dolor",
        "desc": "lorem ipsum dolor sit amet consectetur adipisicing",
        "priceOriginal": 15
      },
      {
        "id": 3,
        "img": "/coffee/coffee3.jpg",
        "title": "lorem ipsum dolor",
        "desc": "lorem ipsum dolor sit amet adipisicing elit",
        "priceOriginal": 20
      }
    ]
  },
  {
      "id": 1,
      "name": "桂院牛肉面",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      "img": "/coffee/coffee1.jpg",
      "price_original": 12,
      "price": 11,
      "discount": 0.1,
      "flavour": "卤香",
      "is_follow": false,
      "stock": 200,
      "cup": [
        { "id": 1, "tag": "中杯", "sel": true },
        { "id": 2, "tag": "大杯", "sel": false }
      ],
      "ther": [
        { "id": 0, "tag": "热", "sel": false },
        { "id": 1, "tag": "冰", "sel": true }
      ],
      "sugar": [
        { "id": 0, "tag": "半糖", "sel": false },
        { "id": 1, "tag": "标准糖", "sel": false },
        { "id": 2, "tag": "不加糖", "sel": true }
      ],
      "dessert": [
        {
          "id": 2,
          "img": "/dessert/dessert2.png",
          "title": "原味·蛋挞",
          "price_original": 5,
          "discount": 0.3
        },
        {
          "id": 3,
          "img": "/dessert/dessert3.png",
          "title": "蔓越莓·饼干",
          "price_original": 8,
          "discount": 0.4
        },
        {
          "id": 4,
          "img": "/dessert/dessert4.png",
          "title": "火炬·冰淇淋",
          "price_original": 10,
          "discount": 0.5
        }
      ]
  },
  {
      "id": 7,
      "name": "新华擂椒拌饭",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      "img": "/coffee/coffee7.jpg",
      "price_original": 15,
      "price": 14,
      "discount": 0.2,
      "flavour": "辛辣",
      "is_follow": false,
      "stock": 120,
      "cup": [
        { "id": 1, "tag": "中杯", "sel": true },
        { "id": 2, "tag": "大杯", "sel": false }
      ],
      "ther": [
        { "id": 0, "tag": "热", "sel": false },
        { "id": 1, "tag": "冰", "sel": true }
      ],
      "sugar": [
        { "id": 0, "tag": "半糖", "sel": false },
        { "id": 1, "tag": "标准糖", "sel": false },
        { "id": 2, "tag": "不加糖", "sel": true }
      ],
      "dessert": [
        {
          "id": 8,
          "img": "/dessert/dessert8.png",
          "title": "巧克力·甜甜圈",
          "price_original": 5,
          "discount": 0.3
        },
        {
          "id": 9,
          "img": "/dessert/dessert9.png",
          "title": "香提子·蛋挞",
          "price_original": 8,
          "discount": 0.4
        },
        {
          "id": 0,
          "img": "/dessert/dessert0.png",
          "title": "巧克力碎·纸杯蛋糕",
          "price_original": 10,
          "discount": 0.5
        }
      ],
      "recommend": [
        {
          "id": 2,
          "img": "/coffee/coffee8.jpg",
          "title": "lorem ipsum dolor",
          "desc": "lorem adipisicing elit",
          "price_original": 18
        },
        {
          "id": 4,
          "img": "/coffee/coffee9.jpg",
          "title": "lorem ipsum dolor",
          "desc": "consectetur adipisicing elit",
          "price_original": 22
        },
        {
          "id": 3,
          "img": "/coffee/coffee10.jpg",
          "title": "lorem ipsum dolor",
          "desc": "lorem dolor sit amet adipisicing elit",
          "price_original": 28
        }
      ]
    },
    {
      "id": 8,
      "name": "新华糖水",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      "img": "/coffee/coffee8.jpg",
      "price_original": 10,
      "price": 8,
      "discount": 0.1,
      "flavour": "鲜香",
      "is_follow": false,
      "stock": 120,
      "cup": [
        { "id": 1, "tag": "中杯", "sel": true },
        { "id": 2, "tag": "大杯", "sel": false },
        { "id": 3, "tag": "超大杯", "sel": false }
      ],
      "ther": [
        { "id": 0, "tag": "热", "sel": false },
        { "id": 1, "tag": "冰", "sel": true }
      ],
      "sugar": [
        { "id": 0, "tag": "半糖", "sel": false },
        { "id": 1, "tag": "标准糖", "sel": false },
        { "id": 2, "tag": "不加糖", "sel": true }
      ],
      "dessert": [
        {
          "id": 1,
          "img": "/dessert/dessert1.png",
          "title": "巧克力碎·甜甜圈",
          "price_original": 5,
          "discount": 0.3
        },
        {
          "id": 3,
          "img": "/dessert/dessert3.png",
          "title": "蔓越莓·饼干",
          "price_original": 8,
          "discount": 0.4
        },
        {
          "id": 5,
          "img": "/dessert/dessert5.png",
          "title": "原味·纸杯蛋糕",
          "price_original": 10,
          "discount": 0.5
        }
      ],
      "recommend": [
        {
          "id": 1,
          "img": "/coffee/coffee11.jpg",
          "title": "lorem ipsum dolor",
          "desc": "lorem ipsum dolor sit amet adipisicing elit.",
          "price_original": 18
        },
        {
          "id": 2,
          "img": "/coffee/coffee9.jpg",
          "title": "lorem ipsum dolor sit.",
          "desc": "ipsum dolor  consectetur adipisicing elit.",
          "price_original": 22
        },
        {
          "id": 3,
          "img": "/coffee/coffee10.jpg",
          "title": "lorem ipsum dolor",
          "desc": "dolor sit amet consectetur adipisicing elit.",
          "price_original": 28
        }
      ]
    },
    {
      "id": 6,
      "name": "新华尚福自助",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      "img": "/coffee/coffee6.jpg",
      "price_original": 18,
      "price": 15,
      "discount": 0.3,
      "flavour": "鲜香",
      "is_follow": false,
      "stock": 300,
      "cup": [
        { "id": 1, "tag": "中杯", "sel": true },
        { "id": 2, "tag": "大杯", "sel": false }
      ],
      "ther": [
        { "id": 0, "tag": "热", "sel": false },
        { "id": 1, "tag": "冰", "sel": true }
      ],
      "sugar": [
        { "id": 0, "tag": "半糖", "sel": false },
        { "id": 1, "tag": "标准糖", "sel": false },
        { "id": 2, "tag": "不加糖", "sel": true }
      ],
      "dessert": [
        {
          "id": 7,
          "img": "/dessert/dessert7.png",
          "title": "坚果榛子·饼干",
          "price_original": 5,
          "discount": 0.3
        },
        {
          "id": 8,
          "img": "/dessert/dessert8.png",
          "title": "巧克力·甜甜圈",
          "price_original": 8,
          "discount": 0.4
        },
        {
          "id": 9,
          "img": "/dessert/dessert9.png",
          "title": "香提子·蛋挞",
          "price_original": 10,
          "discount": 0.5
        }
      ],
      "recommend": [
        {
          "id": 9,
          "img": "/coffee/coffee9.jpg",
          "title": "lorem ipsum dolor",
          "desc": "lorem ipsum dolor sit consectetur  elit",
          "price_original": 28
        },
        {
          "id": 8,
          "img": "/coffee/coffee8.jpg",
          "title": "lorem ipsum dolor",
          "desc": "lorem dolor sit amet consectetur elit",
          "price_original": 32
        },
        {
          "id": 7,
          "img": "/coffee/coffee7.jpg",
          "title": "lorem ipsum dolor",
          "desc": "lorem consectetur adipisicing elit",
          "price_original": 35
        }
      ]
    },
]);
//用于计算产品的折扣价
const getDiscount = computed(() => {
  return item => {
    return (item.price * (1 - item.discount)).toFixed(2);
  };
});

const addCart = (item) => {
  console.log('添加到购物车:', item);
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item {
  display: flex;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.title {
  margin: 0;
  font-size: 16px;
}
.flavour {
  background-color: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
}
.desc {
  margin: 0;
  font-size: 14px;
  color: #666;
}
.price {
  margin: 0;
  font-size: 14px;
  color: #f40;
}
.price-inner {
  color: #999;
  text-decoration: line-through;
}
.price-discount {
  margin: 0;
  font-size: 14px;
  color: #f00;
}
.btn {
 width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0022aa;
    color: #fff;
    overflow: hidden;
}
</style>    