define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
    	$mod.OXPost({
    		'form-post':{
    			uid:OXJS.getUID(),
    			post:$('form',$mod).serializeArray(),
    			time:Date.now()
    		}
    	})

    }
  }
})
