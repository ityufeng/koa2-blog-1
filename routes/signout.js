/**
 * Created by lailai on 2017/10/11.
 * �ǳ�·��
 */
var router=require('koa-router')();
var userModel=require('../lib/mysql.js');

//�ǳ�����
router.get('/signout',async(ctx,next)=>{
    ctx.session=null;
    console.log(ctx.session);
    console.log('�ǳ��ɹ�');
    ctx.body='true';
});
module.exports=router;
