const Title = ({ title }: { title: string }) => {
  return (
    <div className="border border-dashed sm:px-6 px-4 py-3 sm:py-4 text-[20px] sm:text-[25px] leading-[36px] border-text-secondary text-text-secondary rounded-[20px]">
      {title}
    </div>
  );
};

export default Title;
