function Input() {
  return (
    <div className="input-container grid h-[38px] grid-cols-3">
      <input
        type="text"
        className="col-span-2 border border-secondary-color bg-transparent px-[10px] focus:outline-none "
        placeholder="Email address"
      />
      <button className="bg-secondary-color font-bold">Sign Up</button>
    </div>
  );
}

export default Input;
