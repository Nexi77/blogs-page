import { useDynamicSvgImport } from "@/hooks/useDynamicImport";
import Skeleton from 'react-loading-skeleton'

interface Props {
  iconName: string;
  wrapperStyle?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

const GenericSkeleton = () => <Skeleton circle />

const SvgIconWrapper =  ({ iconName, svgProp, wrapperStyle }: Props) => {
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      { loading && <GenericSkeleton /> }
      { SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  );
}

export default SvgIconWrapper;