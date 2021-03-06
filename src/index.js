module.exports = function toReadable (number) {
  if (number == 0) {
    return 'zero'
  }
  let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  arr = ('0000' + number).substr(-4).match(/^(\d{1})(\d{1})(\d{2})$/);
  if (arr != 0){
    let str = '';
    str += (arr[1] != 0) ? (a[Number(arr[1])] || b[arr[1][0]] + ' ' + a[arr[1][1]]) + 'thousand ' : '';
    str += (arr[2] != 0) ? (a[Number(arr[2])] || b[arr[2][0]] + ' ' + a[arr[2][1]]) + ' hundred ' : '';
    str += (arr[3] != 0) ? (a[Number(arr[3])] || b[arr[3][0]] + ' ' + a[arr[3][1]]) : '';
    return str.trim();
    }
}
