define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
    	var $f=$('form',$mod).on('submit',function(){
    		try{
    			$mod.OXPost({
		    		'form-post':{
		    			uid:OXJS.getUID(),
		    			post:$f.serializeArray(),
		    			time:Date.now()
		    		}
		    	},function(){
		    		OXJS.toast('提交成功！')
		    	})
    		}catch(e){

    		}
    		return false
    		

    	});
    	
    }
  }
})
