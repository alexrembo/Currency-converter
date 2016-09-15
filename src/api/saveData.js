import {arr as arrLoad} from './loadJson'
import $ from 'jquery'

export let saveData = () => {
  $(function(){            
    $.ajax('http://localhost:3000/endpoint', {
      type: 'POST',
      data: JSON.stringify(arrLoad),
      contentType: 'application/json',
      success: function() { console.log('success');},
      error  : function() { console.log('error');}
    });
  });
}