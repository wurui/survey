define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
    	var $f=$('form',$mod).on('submit',function(){
    		try{
    			$mod.OXPost({
		    		'form-post':{
		    			//uid:OXJS.getUID(),
                        $inserter:'default',
		    			post:$f.serializeArray(),
		    			time:Date.now()
		    		}
		    	},function(r){
                    ///
                    var result=r && r[0]
		    		OXJS.toast(result.error?'操作失败：'+result.error:'提交成功！')
		    	})
    		}catch(e){

    		}
    		return false
    		

    	});
    	
    }
  }
})
