import { TProvincias } from "@/@types/provincias";
import { provincias } from "@/db/provincias";

type InputNomeProvincia = {
  data: {
    provincia: string;
  };
};

export const query = {
  provincias: async (): Promise<TProvincias[]> => {
    return provincias.map((item) => item);
  },
  provincia: async (obj: any, { data: { provincia } }: InputNomeProvincia): Promise<TProvincias | undefined> => {
    return provincias.find((item) => item.nome === provincia);
  },
};
