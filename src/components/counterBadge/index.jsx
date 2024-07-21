/* ----------------------------------------------------------------
  Counter Badge Component
---------------------------------------------------------------- */

const CounterBadge = ({counter}) => {
  return (
    <div className="badge" id="badge-new">
      {counter.new}
    </div>
  );
};

export default CounterBadge;
