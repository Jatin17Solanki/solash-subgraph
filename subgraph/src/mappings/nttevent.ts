import { 
    TokenMinted as TokenMintedEvent,
    TokenBurnt as TokenBurntEvent, 
    WhitelistAdded as WhitelistAddedEvent,
    WhitelistRemoved as WhitelistRemovedEvent,
    WhitelistUpdated as WhitelistUpdatedEvent,
    NTTContractUpdated as NTTContractUpdatedEvent 

} from "../../generated/templates/NTTEvent/NTTEvent"

//Importing the schema
import { NTTContract, Token, WhitelistItem } from "../../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function handleTokenMinted(event: TokenMintedEvent): void {
    let _id = event.params.contractAddress.toHexString() + "_" + event.params.tokenId.toString()
    let token = new Token(_id)
    token.contractAddress = event.params.contractAddress
    token.tokenId = event.params.tokenId
    token.creatorAddress = event.params.creatorAddress
    token.receiverAddress = event.params.receiverAddress
    token.title = event.params.title
    token.associatedCommunity = event.params.associatedCommunity
    token.isValid = event.params.isValid
    token.timeStamp = event.block.timestamp
    token.save()
}

export function handleTokenBurnt(event: TokenBurntEvent): void {
    let _id = event.params.contractAddress.toHexString()  + "_" + event.params.tokenId.toString()
    let token = Token.load(_id)
    if(token) {
        token.contractAddress = event.params.contractAddress
        token.tokenId = event.params.tokenId
        token.creatorAddress = event.params.creatorAddress
        token.receiverAddress = event.params.receiverAddress
        token.title = event.params.title
        token.associatedCommunity = event.params.associatedCommunity
        token.isValid = event.params.isValid
        token.save()
    }
}

/*
Status{
    Revoked,     0
    Claimed,     1 
    NotClaimed   2
}
*/
export function handleWhitelistAdded(event: WhitelistAddedEvent): void {
    let _list = event.params.list
    let size = _list.length
    let notclaimed = 2

    for(let i = 0; i < size; i++){
        let _id = event.params.contractAddress.toHexString() + "_" + _list[i].toHexString();
        let whitelistItem = WhitelistItem.load(_id);

        //if item exist, mark status as notclaimed = 2
        if(whitelistItem) {
            whitelistItem.contractAddress = event.params.contractAddress
            whitelistItem.userAddress = _list[i]
            whitelistItem.status = BigInt.fromU32(notclaimed)
            whitelistItem.save()
        }
        else {
            //if item does not exist, create a new item
            let newWhitelistIem = new WhitelistItem(_id)
            newWhitelistIem.contractAddress = event.params.contractAddress
            newWhitelistIem.userAddress = _list[i]
            newWhitelistIem.status = BigInt.fromU32(notclaimed)
            newWhitelistIem.save()
        }
    }
}

export function handleWhitelistRemoved(event: WhitelistRemovedEvent): void {
    let _list = event.params.list
    let size = _list.length
    let revoked = 0

    for(let i = 0; i < size; i++){
        let _id = event.params.contractAddress.toHexString() + "_" + _list[i].toHexString();
        let whitelistItem = WhitelistItem.load(_id);

        if(whitelistItem) {
            whitelistItem.contractAddress = event.params.contractAddress
            whitelistItem.userAddress = _list[i]
            whitelistItem.status = BigInt.fromU32(revoked)
            whitelistItem.save()
        }
    }
}

export function handleWhitelistUpdated(event: WhitelistUpdatedEvent): void {
    let _id = event.params.contractAddress.toHexString() + "_" + event.params.receiver.toHexString();
    let whitelistItem = WhitelistItem.load(_id);

    if(whitelistItem) {
        whitelistItem.contractAddress = event.params.contractAddress
        whitelistItem.userAddress = event.params.receiver
        whitelistItem.status = event.params.status
        whitelistItem.save()
    }
}

export function handleNTTContractUpdated(event: NTTContractUpdatedEvent): void {
    let nttContract = NTTContract.load(event.params.contractId.toString())
    if(nttContract){
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
    }
}