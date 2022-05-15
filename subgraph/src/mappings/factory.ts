import { NTTContractCreated as NTTContractCreatedEvent } from "../../generated/Factory/Factory"
import { NTTContract } from "../../generated/schema"

//template contract
import { NTTEvent as NTTEventContract} from "../../generated/templates"

export function handleNTTContractCreated(event: NTTContractCreatedEvent): void {
  let nttContract = new NTTContract(event.params.contractId.toString())
  nttContract.contractAddress = event.params.contractAddress
  nttContract.creatorAddress = event.params.creatorAddress
  nttContract.title = event.params.title
  nttContract.description = event.params.description
  nttContract.links = event.params.links
  nttContract.imageHash = event.params.imageHash
  nttContract.associatedCommunity = event.params.associatedCommunity
  nttContract.startDate = event.params.startDate
  nttContract.endDate = event.params.endDate
  nttContract.save()

  NTTEventContract.create(event.params.contractAddress)
}
