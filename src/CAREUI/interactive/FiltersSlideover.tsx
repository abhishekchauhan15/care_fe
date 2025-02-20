import { useTranslation } from "react-i18next";
import useFilters from "../../Common/hooks/useFilters";
import ButtonV2 from "../../Components/Common/components/ButtonV2";
import CareIcon from "../icons/CareIcon";
import SlideOver from "./SlideOver";

type AdvancedFilter = ReturnType<typeof useFilters>["advancedFilter"];

interface Props {
  children: any;
  advancedFilter: AdvancedFilter;
  onClear?: () => void;
  onApply?: () => void;
}

export default function FiltersSlideover({
  children,
  advancedFilter,
  onClear,
  onApply,
}: Props) {
  const { t } = useTranslation();
  return (
    <SlideOver
      {...advancedFilter}
      open={advancedFilter.show}
      setOpen={advancedFilter.setShow}
      title={
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{t("advanced_filters")}</span>
          <div className="flex items-center justify-end gap-1 mr-2">
            <ButtonV2 variant="danger" ghost onClick={onClear}>
              <CareIcon className="care-l-filter-slash text-lg" />
              <span>{t("clear")}</span>
            </ButtonV2>
            <ButtonV2 ghost onClick={onApply}>
              {t("apply")}
            </ButtonV2>
          </div>
        </div>
      }
      dialogClass="w-full max-w-[28rem]"
    >
      <div className="flex flex-col gap-6 p-2">{children}</div>
    </SlideOver>
  );
}

export const AdvancedFilterButton = ({ onClick }: { onClick: () => void }) => {
  const { t } = useTranslation();
  return (
    <ButtonV2
      ghost
      border
      className="bg-white w-full sm:w-auto"
      onClick={onClick}
    >
      <CareIcon className="care-l-list-ul text-lg" />
      <span>{t("advanced_filters")}</span>
    </ButtonV2>
  );
};
