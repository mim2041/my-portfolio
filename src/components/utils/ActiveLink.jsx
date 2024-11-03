const ActiveLink = ({ sectionId, children, isActive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`py-2.5 cursor-pointer text-[14px] font-[700] flex items-center justify-center gap-3 w-full ${
        isActive ? "bg-[#292929]" : "hover:border-y border-[#454545]"
      }`}
    >
      {children}
    </a>
  );
};

export default ActiveLink;
