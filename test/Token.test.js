const { expect } = require("chai")

describe("ERC721AImpl", function () {
    let erc721aImpl;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        const ERC721AImpl = await ethers.getContractFactory("ERC721AImpl");
        [owner, addr1, addr2] = await ethers.getSigners();

        erc721aImpl = await ERC721AImpl.deploy();
        await erc721aImpl.deployed();
    });

    it("should deploy and mint tokens", async function () {
        // Mint some tokens
        const quantity = 10;
        await erc721aImpl.connect(owner).mint(quantity);

        const ownerBalance = await erc721aImpl.balanceOf(owner.address);
        for(let i = 0; i < quantity; i++) {
            expect(await erc721aImpl.ownerOf(i)).to.equal(owner.address);
        }
    })
});
