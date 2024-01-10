const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	// first condition check 

	//  if array length is zero then return empty array

	if(arr.length===0) return [];


	// make a tracking sum variable for track sum

	let trackingSum = 0;

	// another make a empty SubArray that can store subArra

	let subArr = [];

	// another make a ans empty array that can store resultant array

  let ans = [];

	// make a loop

	for(let i = 0; i<arr.length;i++){

		// give a cond

		if(trackingSum + arr[i] <=n){


			subArr.push(arr[i]);

			trackingSum += arr[i];
		}


		else{

			ans.push(subArr);

			subArr = arr[i];

			trackingSum = arr[i];
		}
	}

	ans.push(subArr);

	return ans;

	



	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
