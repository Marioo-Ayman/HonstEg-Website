import type {ApplyFormValues} from "@/types/Types";

export const submitToFormspree = async (data: ApplyFormValues) => {
  return fetch("https://formspree.io/f/mlgnlqko", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      packages: data.packages.map((p) => ({
        name: p.packageName,
        amount: p.investmentAmount,
      })),
    }),
  });
};