// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NTTContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NTTContract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NTTContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NTTContract", id.toString(), this);
    }
  }

  static load(id: string): NTTContract | null {
    return changetype<NTTContract | null>(store.get("NTTContract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contractId(): BigInt {
    let value = this.get("contractId");
    return value!.toBigInt();
  }

  set contractId(value: BigInt) {
    this.set("contractId", Value.fromBigInt(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value!.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get creatorAddress(): Bytes {
    let value = this.get("creatorAddress");
    return value!.toBytes();
  }

  set creatorAddress(value: Bytes) {
    this.set("creatorAddress", Value.fromBytes(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get links(): Array<string> | null {
    let value = this.get("links");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set links(value: Array<string> | null) {
    if (!value) {
      this.unset("links");
    } else {
      this.set("links", Value.fromStringArray(<Array<string>>value));
    }
  }

  get imageHash(): string | null {
    let value = this.get("imageHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageHash(value: string | null) {
    if (!value) {
      this.unset("imageHash");
    } else {
      this.set("imageHash", Value.fromString(<string>value));
    }
  }

  get associatedCommunity(): string {
    let value = this.get("associatedCommunity");
    return value!.toString();
  }

  set associatedCommunity(value: string) {
    this.set("associatedCommunity", Value.fromString(value));
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    return value!.toBigInt();
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get endDate(): BigInt | null {
    let value = this.get("endDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endDate(value: BigInt | null) {
    if (!value) {
      this.unset("endDate");
    } else {
      this.set("endDate", Value.fromBigInt(<BigInt>value));
    }
  }

  get timeStamp(): BigInt {
    let value = this.get("timeStamp");
    return value!.toBigInt();
  }

  set timeStamp(value: BigInt) {
    this.set("timeStamp", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value!.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get creatorAddress(): Bytes {
    let value = this.get("creatorAddress");
    return value!.toBytes();
  }

  set creatorAddress(value: Bytes) {
    this.set("creatorAddress", Value.fromBytes(value));
  }

  get receiverAddress(): Bytes {
    let value = this.get("receiverAddress");
    return value!.toBytes();
  }

  set receiverAddress(value: Bytes) {
    this.set("receiverAddress", Value.fromBytes(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get links(): Array<string> | null {
    let value = this.get("links");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set links(value: Array<string> | null) {
    if (!value) {
      this.unset("links");
    } else {
      this.set("links", Value.fromStringArray(<Array<string>>value));
    }
  }

  get imageHash(): string | null {
    let value = this.get("imageHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageHash(value: string | null) {
    if (!value) {
      this.unset("imageHash");
    } else {
      this.set("imageHash", Value.fromString(<string>value));
    }
  }

  get associatedCommunity(): string {
    let value = this.get("associatedCommunity");
    return value!.toString();
  }

  set associatedCommunity(value: string) {
    this.set("associatedCommunity", Value.fromString(value));
  }

  get isValid(): boolean {
    let value = this.get("isValid");
    return value!.toBoolean();
  }

  set isValid(value: boolean) {
    this.set("isValid", Value.fromBoolean(value));
  }

  get timeStamp(): BigInt {
    let value = this.get("timeStamp");
    return value!.toBigInt();
  }

  set timeStamp(value: BigInt) {
    this.set("timeStamp", Value.fromBigInt(value));
  }
}

export class WhitelistItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WhitelistItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WhitelistItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WhitelistItem", id.toString(), this);
    }
  }

  static load(id: string): WhitelistItem | null {
    return changetype<WhitelistItem | null>(store.get("WhitelistItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value!.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get userAddress(): Bytes {
    let value = this.get("userAddress");
    return value!.toBytes();
  }

  set userAddress(value: Bytes) {
    this.set("userAddress", Value.fromBytes(value));
  }

  get status(): BigInt {
    let value = this.get("status");
    return value!.toBigInt();
  }

  set status(value: BigInt) {
    this.set("status", Value.fromBigInt(value));
  }
}
