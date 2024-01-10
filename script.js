const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	// if arr lenghth is zero then return empty array

	if(arr.length===0) return [] ; 


	let trackingSum = 0;

	let ans = [];

	let subArray = [];

	for(let i = 0; i<arr.length; i++){

		if(trackingSum + arr[i] <= n){

			subArray.push(arr[i]);

			trackingSum += arr[i];
		}

		else{

			ans.push(subArray);

			subArray = [ arr[i]];

			trackingSum = arr[i];
		}
	}

 ans.push(subArray);

	return ans;

	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
