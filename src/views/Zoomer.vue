<template>
  <div class="image-zoomer">
    <h3 class="border-bottom text-center pb-2"> Image Zoomer </h3>
    
    <div class="container mt-2 mb-2 ">
      <ProductZoomer
        class="product-zoomer border p-1"
        :base-images="images"
        :base-zoomer-options="zoomerOptions"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)

export default {
  data() {
    return {
      images: {
        'thumbs': [
          {
            'id': 1,
            'url': 'https://www.powerplanetonline.com/cdnassets/xiaomi_redmi_8a_2gb_32gb_01_m.jpg'
          },
          {
            'id': 2,
            'url': 'https://www.powerplanetonline.com/cdnassets/cubot_x19_4gb64gb_01_m.jpg'
          }
        ],
        'normal_size': [
          {
            'id': 1,
            'url': 'https://22yz5v4cagnrhfa931gvorr1-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/VIVO-Y91C_1-1.jpg'
          },
          {
            'id': 2,
            'url': 'https://www.cdiscount.com/pdt2/l/e/u/1/700x700/honor10litebleu/rw/honor-10-lite-sky-blue-64-go-version-francaise.jpg'
          }         
        ]
      },
      zoomerOptions: {
        zoomFactor: 3,
        pane: "container-round",
        hoverDelay: 300,
        namespace: "inline-round-zoomer",
        move_by_click: true,
        scroll_items: 3,
        choosed_thumb_border_color: "#dd2c00",
        scroller_position: "bottom",
        zoomer_pane_position: "right"
      }
    }
  }
}
</script>