define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
    	var $f=$('form',$mod).on('submit',function(){
    		try{
    			$mod.OXPost({
		    		'user-apply':{
		    			//uid:OXJS.getUID(),
                        //subject:'问卷调查',
                        $inserter:'default',
		    			file:$f.serializeArray()
		    		}
		    	},function(r){
                    ///
                    
                    var result=r && r['user-apply']
		    		OXJS.toast(result.error?'操作失败：'+result.error:'提交成功！')
                    if(result && result.body && result.body.LINK){
                        location.href=result.body.LINK.done;
                    }
		    	})
    		}catch(e){

    		}
    		return false
    		

    	});
    	
    }
  }
})
