function raiseError(msg: string): never {
  throw new Error(msg);
}

raiseError('Deb');

function fn(a:string|number):boolean
{
    if(typeof(a==="string")){
        return true;
    }
    else if(typeof(a==="number")){
        return false;
    }
    else{
        return false;
    }
}
