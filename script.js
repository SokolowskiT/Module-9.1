var a,
	h,
	triangle1Area = getTriangleArea(-1, 10),
	triangle2Area = getTriangleArea(12, 3),
	triangle3Area = getTriangleArea(2, 0),
	triangle4Area = getTriangleArea(0, 0);

function getTriangleArea(a, h) {
	if(a<=0 || h<=0) {
		return "You've entered wrong data - both numbers should be positive";
	} else {
		return a * h / 2;
	}
}

console.log("For a=10 and h=6 = "+ getTriangleArea(10, 6));

console.log("For a=-1 and h=10 = "+ triangle1Area);

console.log("For a=12 and h=3 = "+ triangle2Area);

console.log("For a=2 and h=0 = "+ triangle3Area);

console.log("For a=0 and h=0 = "+ triangle4Area);