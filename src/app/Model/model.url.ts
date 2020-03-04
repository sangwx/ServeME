const host = 'https://servicemeteam6.herokuapp.com';
export const Urls = {
    apiUrl: 'https://servicemeteam6.herokuapp.com',
    register: host + '/user/register', // 注册
    login: host +  '/user/login', // 登录
    getQuestion: host +  '/user/forget_get_question', //根据用户名获取密码
    postNewPwd: host +  '/user/forget_reset_password', //post新密码
    postAnswer: host +  '/user/forget_check_answer', //post用户名、答案
    loginPwd: '/reset_password', //登录状态更新密码
    getUserInfo: '/get_user_information',
    updateUserInfo: '/update_user_information',
    getCustomerOrder: '/order/getCustomerOrderList',
    getVendorOrder: '/order/getVendorOrderList',
    CreateOrder: '/order/createOrder',
};
