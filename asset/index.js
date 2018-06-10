define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
    	var $f=$('form',$mod).on('submit',function(){
    		$mod.OXPost({
	    		'form-post':{
	    			uid:OXJS.getUID(),
	    			post:$f.serializeArray(),
	    			time:Date.now()
	    		}
	    	})

    	});
    	
    }
  }
})
