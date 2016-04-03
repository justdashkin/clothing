$(document).ready(function(){
  var db = {
    'Woman': {
      coats: {
        womanCoat1: {
          name: 'coat_w1',
          color: 'black',
          size: '38',
          amount: '40',
          srcCategory: 'img/items/img_1_w.png',
          srcBig1: 'img/items/coats_1_big_w.png',
          srcSmall1: 'img/items/coats_1_small_w.png',
          srcBig2: 'img/items/coats_2_big_w.png',
          srcSmall2: 'img/items/coats_2_small_w.png',
          srcBig3: 'img/items/coats_3_big_w.png',
          srcSmall3: 'img/items/coats_3_small_w.png',
          value: '1'
        },
        womanCoat2: {
          name: 'coat_w2',
          color: 'black',
          size: '38',
          amount: '50',
          srcCategory: 'img/items/img_1_w.png',
          srcBig1: 'img/items/coats_1_big_w.png',
          srcSmall1: 'img/items/coats_1_small_w.png',
          srcBig2: 'img/items/coats_2_big_w.png',
          srcSmall2: 'img/items/coats_2_small_w.png',
          srcBig3: 'img/items/coats_3_big_w.png',
          srcSmall3: 'img/items/coats_3_small_w.png',
          value: '1'
        },
        womanCoat3: {
          name: 'coat_w3',
          color: 'black',
          size: '39',
          amount: '60',
          srcCategory: 'img/items/img_1_w.png',
          srcBig1: 'img/items/coats_1_big_w.png',
          srcSmall1: 'img/items/coats_1_small_w.png',
          srcBig2: 'img/items/coats_2_big_w.png',
          srcSmall2: 'img/items/coats_2_small_w.png',
          srcBig3: 'img/items/coats_3_big_w.png',
          srcSmall3: 'img/items/coats_3_small_w.png',
          value: '1'
        },
        womanCoat4: {
          name: 'coat_w4',
          color: 'black',
          size: '40',
          amount: '99.99',
          srcCategory: 'img/items/img_1_w.png',
          srcBig1: 'img/items/coats_1_big_w.png',
          srcSmall1: 'img/items/coats_1_small_w.png',
          srcBig2: 'img/items/coats_2_big_w.png',
          srcSmall2: 'img/items/coats_2_small_w.png',
          srcBig3: 'img/items/coats_3_big_w.png',
          srcSmall3: 'img/items/coats_3_small_w.png',
          value: '1'
        }
      },
      outwear: {
        womanOutwear1: {
          name: 'outwear_w1',
          color: 'black',
          size: '38',
          amount: '100',
          srcCategory: 'img/items/img_2_w.png',
          srcBig1: 'img/items/outwear_1_big_w.png',
          srcSmall1: 'img/items/outwear_1_small_w.png',
          srcBig2: 'img/items/outwear_2_big_w.png',
          srcSmall2: 'img/items/outwear_2_small_w.png',
          srcBig3: 'img/items/outwear_3_big_w.png',
          srcSmall3: 'img/items/outwear_3_small_w.png',
          value: '1'
        },
        womanOutwear2: {
          name: 'outwear_w2',
          color: 'black',
          size: '38',
          amount: '80',
          srcCategory: 'img/items/img_2_w.png',
          srcBig1: 'img/items/outwear_1_big_w.png',
          srcSmall1: 'img/items/outwear_1_small_w.png',
          srcBig2: 'img/items/outwear_2_big_w.png',
          srcSmall2: 'img/items/outwear_2_small_w.png',
          srcBig3: 'img/items/outwear_3_big_w.png',
          srcSmall3: 'img/items/outwear_3_small_w.png',
          value: '1'
        },
        womanOutwear3: {
          name: 'outwear_w3',
          color: 'black',
          size: '39',
          amount: '55',
          srcCategory: 'img/items/img_2_w.png',
          srcBig1: 'img/items/outwear_1_big_w.png',
          srcSmall1: 'img/items/outwear_1_small_w.png',
          srcBig2: 'img/items/outwear_2_big_w.png',
          srcSmall2: 'img/items/outwear_2_small_w.png',
          srcBig3: 'img/items/outwear_3_big_w.png',
          srcSmall3: 'img/items/outwear_3_small_w.png',
          value: '1'
        },
        womanOutwear4: {
          name: 'outwear_w4',
          color: 'black',
          size: '38',
          amount: '50',
          srcCategory: 'img/items/img_2_w.png',
          srcBig1: 'img/items/outwear_1_big_w.png',
          srcSmall1: 'img/items/outwear_1_small_w.png',
          srcBig2: 'img/items/outwear_2_big_w.png',
          srcSmall2: 'img/items/outwear_2_small_w.png',
          srcBig3: 'img/items/outwear_3_big_w.png',
          srcSmall3: 'img/items/outwear_3_small_w.png',
          value: '1'
        }
      },
      tshirts: {
        womantshirt1: {
          name: 'tshirt_w1',
          color: 'black',
          size: '38',
          amount: '90',
          srcCategory: 'img/items/img_3_w.png',
          srcBig1: 'img/items/tshirts_1_big_w.png',
          srcSmall1: 'img/items/tshirts_1_small_w.png',
          srcBig2: 'img/items/tshirts_2_big_w.png',
          srcSmall2: 'img/items/tshirts_2_small_w.png',
          srcBig3: 'img/items/tshirts_3_big_w.png',
          srcSmall3:'img/items/tshirts_3_small_w.png',
          value: '1'
        },
        womantshirt2: {
          name: 'tshirt_w2',
          color: 'black',
          size: '38',
          amount: '59.99',
          srcCategory: 'img/items/img_3_w.png',
          srcBig1: 'img/items/tshirts_1_big_w.png',
          srcSmall1: 'img/items/tshirts_1_small_w.png',
          srcBig2: 'img/items/tshirts_2_big_w.png',
          srcSmall2: 'img/items/tshirts_2_small_w.png',
          srcBig3: 'img/items/tshirts_3_big_w.png',
          srcSmall3:'img/items/tshirts_3_small_w.png',
          value: '1'
        },
        womantshirt3: {
          name: 'tshirt_w3',
          color: 'black',
          size: '38',
          amount: '99',
          srcCategory: 'img/items/img_3_w.png',
          srcBig1: 'img/items/tshirts_1_big_w.png',
          srcSmall1: 'img/items/tshirts_1_small_w.png',
          srcBig2: 'img/items/tshirts_2_big_w.png',
          srcSmall2: 'img/items/tshirts_2_small_w.png',
          srcBig3: 'img/items/tshirts_3_big_w.png',
          srcSmall3:'img/items/tshirts_3_small_w.png',
          value: '1'
        },
        womantshirt4: {
          name: 'tshirt_w4',
          color: 'black',
          size: '38',
          amount: '100',
          srcCategory: 'img/items/img_3_w.png',
          srcBig1: 'img/items/tshirts_1_big_w.png',
          srcSmall1: 'img/items/tshirts_1_small_w.png',
          srcBig2: 'img/items/tshirts_2_big_w.png',
          srcSmall2: 'img/items/tshirts_2_small_w.png',
          srcBig3: 'img/items/tshirts_3_big_w.png',
          srcSmall3:'img/items/tshirts_3_small_w.png',
          value: '1'
        }
      }
    },
    'Men': {
      coats: {
        menCoat1: {
          name: 'coat_m1',
          color: 'black',
          size: '38',
          amount: '99',
          srcCategory: 'img/items/img_1_m.png',
          srcBig1: 'img/items/coats_1_big_m.png',
          srcSmall1: 'img/items/coats_1_small_m.png',
          srcBig2: 'img/items/coats_2_big_m.png',
          srcSmall2: 'img/items/coats_2_small_m.png',
          srcBig3: 'img/items/coats_3_big_m.png',
          srcSmall3: 'img/items/coats_3_small_m.png',
          value: '1'
        },
        menCoat2: {
          name: 'coat_m2',
          color: 'black',
          size: '38',
          amount: '90',
          srcCategory: 'img/items/img_1_m.png',
          srcBig1: 'img/items/coats_1_big_m.png',
          srcSmall1: 'img/items/coats_1_small_m.png',
          srcBig2: 'img/items/coats_2_big_m.png',
          srcSmall2: 'img/items/coats_2_small_m.png',
          srcBig3: 'img/items/coats_3_big_m.png',
          srcSmall3: 'img/items/coats_3_small_m.png',
          value: '1'
        },
        menCoat3: {
          name: 'coat_m3',
          color: 'black',
          size: '38',
          amount: '80',
          srcCategory: 'img/items/img_1_m.png',
          srcBig1: 'img/items/coats_1_big_m.png',
          srcSmall1: 'img/items/coats_1_small_m.png',
          srcBig2: 'img/items/coats_2_big_m.png',
          srcSmall2: 'img/items/coats_2_small_m.png',
          srcBig3: 'img/items/coats_3_big_m.png',
          srcSmall3: 'img/items/coats_3_small_m.png',
          value: '1'
        },
        menCoat4: {
          name: 'coat_m4',
          color: 'black',
          size: '38',
          amount: '90',
          srcCategory: 'img/items/img_1_m.png',
          srcBig1: 'img/items/coats_1_big_m.png',
          srcSmall1: 'img/items/coats_1_small_m.png',
          srcBig2: 'img/items/coats_2_big_m.png',
          srcSmall2: 'img/items/coats_2_small_m.png',
          srcBig3: 'img/items/coats_3_big_m.png',
          srcSmall3: 'img/items/coats_3_small_m.png',
          value: '1'
        }
      },
      outwear: {
        menOutwear1: {
          name: 'outwear_m1',
          color: 'black',
          size: '38',
          amount: '10',
          srcCategory: 'img/items/img_2_m.png',
          srcBig1: 'img/items/outwear_1_big_m.png',
          srcSmall1: 'img/items/outwear_1_small_m.png',
          srcBig2: 'img/items/outwear_2_big_m.png',
          srcSmall2: 'img/items/outwear_2_small_m.png',
          srcBig3: 'img/items/outwear_3_big_m.png',
          srcSmall3: 'img/items/outwear_3_small_m.png',
          value: '1'
        },
        menOutwear2: {
          name: 'outwear_m2',
          color: 'black',
          size: '38',
          amount: '140',
          srcCategory: 'img/items/img_2_m.png',
          srcBig1: 'img/items/outwear_1_big_m.png',
          srcSmall1: 'img/items/outwear_1_small_m.png',
          srcBig2: 'img/items/outwear_2_big_m.png',
          srcSmall2: 'img/items/outwear_2_small_m.png',
          srcBig3: 'img/items/outwear_3_big_m.png',
          srcSmall3: 'img/items/outwear_3_small_m.png',
          value: '1'
        },
        menOutwear3: {
          name: 'outwear_m3',
          color: 'black',
          size: '38',
          amount: '150',
          srcCategory: 'img/items/img_2_m.png',
          srcBig1: 'img/items/outwear_1_big_m.png',
          srcSmall1: 'img/items/outwear_1_small_m.png',
          srcBig2: 'img/items/outwear_2_big_m.png',
          srcSmall2: 'img/items/outwear_2_small_m.png',
          srcBig3: 'img/items/outwear_3_big_m.png',
          srcSmall3: 'img/items/outwear_3_small_m.png',
          value: '1'
        },
        menOutwear4: {
          name: 'outwear_m4',
          color: 'black',
          size: '38',
          amount: '149.99',
          srcCategory: 'img/items/img_2_m.png',
          srcBig1: 'img/items/outwear_1_big_m.png',
          srcSmall1: 'img/items/outwear_1_small_m.png',
          srcBig2: 'img/items/outwear_2_big_m.png',
          srcSmall2: 'img/items/outwear_2_small_m.png',
          srcBig3: 'img/items/outwear_3_big_m.png',
          srcSmall3: 'img/items/outwear_3_small_m.png',
          value: '1'
        }
      },
      tshirts: {
        mentshirt1: {
          name: 'tshirt_m1',
          color: 'black',
          size: '38',
          amount: '60',
          srcCategory: 'img/items/img_3_m.png',
          srcBig1: 'img/items/tshirts_1_big_m.png',
          srcSmall1: 'img/items/tshirts_1_small_m.png',
          srcBig2: 'img/items/tshirts_2_big_m.png',
          srcSmall2: 'img/items/tshirts_2_small_m.png',
          srcBig3: 'img/items/tshirts_3_big_m.png',
          srcSmall3: 'img/items/tshirts_3_small_m.png',
          value: '1'
        },
        mentshirt2: {
          name: 'tshirt_m2',
          color: 'black',
          size: '38',
          amount: '9.99',
          srcCategory: 'img/items/img_3_m.png',
          srcBig1: 'img/items/tshirts_1_big_m.png',
          srcSmall1: 'img/items/tshirts_1_small_m.png',
          srcBig2: 'img/items/tshirts_2_big_m.png',
          srcSmall2: 'img/items/tshirts_2_small_m.png',
          srcBig3: 'img/items/tshirts_3_big_m.png',
          srcSmall3: 'img/items/tshirts_3_small_m.png',
          value: '1'
        },
        mentshirt3: {
          name: 'tshirt_m3',
          color: 'black',
          size: '38',
          amount: '108',
          srcCategory: 'img/items/img_3_m.png',
          srcBig1: 'img/items/tshirts_1_big_m.png',
          srcSmall1: 'img/items/tshirts_1_small_m.png',
          srcBig2: 'img/items/tshirts_2_big_m.png',
          srcSmall2: 'img/items/tshirts_2_small_m.png',
          srcBig3: 'img/items/tshirts_3_big_m.png',
          srcSmall3: 'img/items/tshirts_3_small_m.png',
          value: '1'

        },
        mentshirt4: {
          name: 'tshirt_m4',
          color: 'black',
          size: '38',
          amount: '100',
          srcCategory: 'img/items/img_3_m.png',
          srcBig1: 'img/items/tshirts_1_big_m.png',
          srcSmall1: 'img/items/tshirts_1_small_m.png',
          srcBig2: 'img/items/tshirts_2_big_m.png',
          srcSmall2: 'img/items/tshirts_2_small_m.png',
          srcBig3: 'img/items/tshirts_3_big_m.png',
          srcSmall3: 'img/items/tshirts_3_small_m.png',
          value: '1'
        }
      }
    }
  }

  function setBasket(){

    if(!localStorage.getItem('basket')){
      localStorage.setItem('basket','[]');
    };
  };

  setBasket();


  var jsonDb = JSON.stringify(db);
  localStorage.setItem('db', jsonDb);

});
