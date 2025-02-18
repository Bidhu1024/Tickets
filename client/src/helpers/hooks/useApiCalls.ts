import { useMutation, MutateOptions } from "@tanstack/react-query";

interface Props extends Omit<MutateOptions<any, any, any, any>, 'mutationFn'> {
  fn: (data: any) => Promise<any>;
}

function useApiCalls({ fn, ...rest }: Props) {
  return useMutation({
    mutationFn: fn,
    ...rest
  });
}

export default useApiCalls;