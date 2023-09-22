import { test, beforeAll, expect, describe } from 'vitest';
import {
  createRecord,
  deleteRecord,
  updateRecord,
} from '../../../../code-snippets/api/web5-js/dwn/record';
import { Web5 } from '@web5/api/browser';

let web5;
let record;
let myDid;

beforeAll(async () => {
  const result = await Web5.connect();
  web5 = result.web5;
  myDid = result.did;
});

describe('tests for /api/web5-js/dwn/record', async () => {
  test('createRecord creates a record', async () => {
    const result = await createRecord(web5, myDid);
    record = result;

    expect(result).toBeDefined();
  });

  test('updateRecord updates the created record', async () => {
    const result = await updateRecord(record);

    expect.soft(result.status.code).toBe(202);
  });

  test('deleteRecord deletes the updated record', async () => {
    const result = await deleteRecord(record);

    expect.soft(result.status.code).toBe(202);
  });
});