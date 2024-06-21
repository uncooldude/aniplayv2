import TrendingCard from "@/components/TrendingCard/TrendingCard";
import { SeasonalAnilist } from "@/lib/Anilistfunction";

const Season = ({ data }) => {

  return (
    <div className="w-full max-w-[96rem] relative bottom-28 mx-5 mt-12">
      <h1 className="text-[#ffffffbd] font-medium text-2xl font-['poppins']">| Most Popular This Season</h1>

      <div className="mt-8 grid grid-auto-fit gap-3">
        {data?.map((item, index) => <TrendingCard info={item} key={index} />)}
      </div>

    </div>
  )
}

export default Season