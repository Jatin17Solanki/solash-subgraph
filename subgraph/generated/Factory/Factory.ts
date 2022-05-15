// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NTTContractCreated extends ethereum.Event {
  get params(): NTTContractCreated__Params {
    return new NTTContractCreated__Params(this);
  }
}

export class NTTContractCreated__Params {
  _event: NTTContractCreated;

  constructor(event: NTTContractCreated) {
    this._event = event;
  }

  get contractId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get creatorAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get title(): string {
    return this._event.parameters[3].value.toString();
  }

  get description(): string {
    return this._event.parameters[4].value.toString();
  }

  get links(): Array<string> {
    return this._event.parameters[5].value.toStringArray();
  }

  get imageHash(): string {
    return this._event.parameters[6].value.toString();
  }

  get associatedCommunity(): string {
    return this._event.parameters[7].value.toString();
  }

  get startDate(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get endDate(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  deployNTT(
    _title: string,
    _description: string,
    _links: Array<string>,
    _imageHash: string,
    _associatedCommunity: string,
    _startDate: BigInt,
    _endDate: BigInt,
    _list: Array<Address>
  ): Address {
    let result = super.call(
      "deployNTT",
      "deployNTT(string,string,string[],string,string,uint256,uint256,address[]):(address)",
      [
        ethereum.Value.fromString(_title),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromStringArray(_links),
        ethereum.Value.fromString(_imageHash),
        ethereum.Value.fromString(_associatedCommunity),
        ethereum.Value.fromUnsignedBigInt(_startDate),
        ethereum.Value.fromUnsignedBigInt(_endDate),
        ethereum.Value.fromAddressArray(_list)
      ]
    );

    return result[0].toAddress();
  }

  try_deployNTT(
    _title: string,
    _description: string,
    _links: Array<string>,
    _imageHash: string,
    _associatedCommunity: string,
    _startDate: BigInt,
    _endDate: BigInt,
    _list: Array<Address>
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployNTT",
      "deployNTT(string,string,string[],string,string,uint256,uint256,address[]):(address)",
      [
        ethereum.Value.fromString(_title),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromStringArray(_links),
        ethereum.Value.fromString(_imageHash),
        ethereum.Value.fromString(_associatedCommunity),
        ethereum.Value.fromUnsignedBigInt(_startDate),
        ethereum.Value.fromUnsignedBigInt(_endDate),
        ethereum.Value.fromAddressArray(_list)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployNTTCall extends ethereum.Call {
  get inputs(): DeployNTTCall__Inputs {
    return new DeployNTTCall__Inputs(this);
  }

  get outputs(): DeployNTTCall__Outputs {
    return new DeployNTTCall__Outputs(this);
  }
}

export class DeployNTTCall__Inputs {
  _call: DeployNTTCall;

  constructor(call: DeployNTTCall) {
    this._call = call;
  }

  get _title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _links(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get _imageHash(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _associatedCommunity(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _startDate(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _endDate(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _list(): Array<Address> {
    return this._call.inputValues[7].value.toAddressArray();
  }
}

export class DeployNTTCall__Outputs {
  _call: DeployNTTCall;

  constructor(call: DeployNTTCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
