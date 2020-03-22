module.exports = function check(str, bracketsConfig) {
    let brack=[];
    for (let i=0;i<bracketsConfig.length;i++){
        while (true){
            brack=bracketsConfig[i][0]+bracketsConfig[i][1];
            if(str.includes(brack))
            {
                str=str.replace(brack,"");
                i=0;
            }
            else {
            break;}
        }
    }
    return str.length===0;
};
