import { Select } from "antd";
import { locations } from "@/data/locations";
import Image from "next/image";

type LocationProps = {
    value?: string;
    onChange?: (value: string) => void;
}

const LocationSelect = ({ value, onChange }: LocationProps) => {

  return (
    <Select
      value={value}
      onChange={onChange}
      prefix={<Image src="/bus2.svg" alt="Bus From" width={20} height={20} />}
      placeholder="Enter city, terminal,..."
      className="custom-input"
      style={{ height: "100%", width: "206px"}}
    >
      {locations.map((location) => (
        <Select.Option key={location.short_code} value={location.english_name}>
          <div className="flex flex-col px-2 py-2 gap-2 rounded-lg">
            <span className="text-location text-[#0E0E12]">
              {location.short_code} - {location.english_name}
            </span>
            <span className="text-code-state text-[#65686F]">
              {location.code_state}
            </span>
          </div>
        </Select.Option>
      ))}
    </Select>
  );
};

export default LocationSelect;
