const Stamper = artifacts.require("Stamper");

contract('Stamper', (accounts) => {
  it('No data', async () => {
    const instance = await Stamper.deployed();
    const value = await instance.get.call(accounts[0]);

    assert.equal(value.valueOf(), '', "Aie");
  });
  it('Set new stamp', async () => {
    const stampToSave = 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e';
    const instance = await Stamper.deployed();
    await instance.set(stampToSave);

    const stamp = await instance.get.call(accounts[0]);
    assert.equal(stamp.valueOf(), stampToSave, "Bad value saved");
  });
});
