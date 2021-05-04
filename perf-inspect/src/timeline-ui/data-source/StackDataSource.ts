import { tracecap } from "../../tracecap-proto";

export interface StackDataSource {
    getStackScopes(): tracecap.SampleScope[];
    getStackSamplesForScope(scope: tracecap.SampleScope): tracecap.IThreadSample[];
}
