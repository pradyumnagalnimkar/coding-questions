// Q.) Program to rotate an array

let numbers = [1,2,3,4,5]


function reverseArray(nums){
    left = 0
    right = nums.length - 1
    let temp = 0
    while (left <= right){
        temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left += 1
        right -= 1
    }
    return nums
}

function rotateArray(numbers, k){
    let nums1 = reverseArray(numbers.slice(0,numbers.length-k))
    console.log(nums1)
    let nums2 = reverseArray(numbers.slice(numbers.length-k,numbers.length))
    console.log(nums2)
    let ans = reverseArray(nums1.concat(nums2))
    return ans
}

console.log(rotateArray(numbers, 6))
