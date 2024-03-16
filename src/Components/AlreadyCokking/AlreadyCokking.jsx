import PropTypes from "prop-types";
const AlreadyCokking = ({ alreadyCookings, idx }) => {
  const { name, time, calories } = alreadyCookings;

  return (
    <tr className="second-tr text-[#666666]  bg-[#f8f8f8] h-[85px]  lg:text-lg  border-b-[10px] border-transparent">
      <td className="w-[30px] pl-2">
        <span className="lg:pl-5">{idx + 1}</span>
      </td>
      <td className="w-[120px] ">{name}</td>
      <td className="w-[140px]">
        {time} <br /> minutes
      </td>
      <td className="w-[90px]">
        {calories} <br /> calories
      </td>
    </tr>
  );
};
AlreadyCokking.propTypes = {
  alreadyCookings: PropTypes.object,
  idx: PropTypes.number,
};
export default AlreadyCokking;
