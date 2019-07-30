import StorageUtil from './storageUtil';
export default commons = {
    async getItemParams(self, callback) {
        await StorageUtil.get('userId').then( res => {
            self.setState({
                userId: res
            }) ;
        });
        await StorageUtil.get('token').then( res => {
            self.setState({
                token: res
            }) ;
        });
        await StorageUtil.get('merchantId').then( res => {
            self.setState({
                merchantId: res
            }) ;
        });
        await StorageUtil.get('userName').then( res => {
            self.setState({
                userName: res
            }) ;
        });

        callback && callback();
    }
}
