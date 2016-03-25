export default function () {
  function gt(arr, target){
    return arr.filter(el => el > target);
  }

  function usingCustomFunction(arr, f){
    return arr.filter(el => f.call(null, el));
  }

  return { gt, usingCustomFunction };
}
