function updateProductNumber(product,price,isIncreasing){
    const countPhone = document.getElementById(product + '-number')
    let getPhoneNumber = countPhone.value;
    if(isIncreasing == true){
        countPhone.value = parseInt(getPhoneNumber) + 1;
    }
    else{
        if(parseInt(countPhone.value) > 0){
        countPhone.value = parseInt(getPhoneNumber) - 1;
        }
    }
    const totalProductCost = document.getElementById(product + '-total')
    totalProductCost.innerText = countPhone.value*price
    calculateTotalCost()
}
function getNumberOfProduct(product){
    let totalNumberOfProduct = document.getElementById(product + '-number')
    convertedTotalNumberOfProduct =parseInt(totalNumberOfProduct.value)
    return convertedTotalNumberOfProduct;
}

function calculateTotalCost(){
    const phoneTotal = getNumberOfProduct('phone')* 1219
    const caseTotal = getNumberOfProduct('case')*59
    const subTotal = phoneTotal+caseTotal
    const tax = subTotal/10
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice

}

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219, true)
})
document.getElementById('phone-minus').addEventListener('click',function(){

    updateProductNumber('phone',1219,false)
})
document.getElementById('case-plus').addEventListener('click',function(){

    updateProductNumber('case',59,true)
})
document.getElementById('case-minus').addEventListener('click',function(){
updateProductNumber('case',59,false)
})