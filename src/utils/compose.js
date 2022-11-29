const compose =
	(...funcs) =>
	(comp) => {
		return funcs.reduceRight((wrapped, f) => f(wrapped), comp);
	};
console.log(compose);
export default compose;
