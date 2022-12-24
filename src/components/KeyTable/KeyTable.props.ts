import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum KeyTableType {}

interface Action {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  keysTotal: KeyTotal[];
}

interface KeyTotal {
  id: number;
  keyId: number;
  KeyHolder: string;
  createdAt: Date;
  updatedAt: Date;
}

interface KeyLog {
  id: number;
  keyId: number;
  action: Action;
  createdAt: Date;
  updatedAt: Date;
}

export interface IKey {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  keysTotal: KeyTotal[];
  keyLogs: KeyLog[];
}

export interface KeyTableProps {
  types?: KeyTableType;
  objects: IKey[];
  children?: ReactNode;
}

export interface KeyTableComponentProps
  extends KeyTableProps,
    ComponentPropsWithoutRef<'div'> {
}