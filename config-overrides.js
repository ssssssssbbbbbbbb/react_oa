const {override,fixBabelImports,addWebpackAlias}=require('customize-cra');
const path=require("path");
module.exports=override(
    fixBabelImports('import',{
        libraryName:'antd',
        style:'css'
    }),
    addWebpackAlias({
        
    })
)