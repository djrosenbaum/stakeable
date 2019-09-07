pragma solidity 0.5.11;

contract Stakeable {
  /* ==== EVENTS ==== */
  event OnCreateItem(
      address indexed _lender,
      string _itemName,
      string _description,
      string _imageUrl,
      uint256 _location,
      uint256 _maxDuration,
      uint256 _cost,
      uint256 _timestamp
  );

   event OnBorrow(
       address indexed _borrower,
       address _lender,
       uint256 _itemId,
       uint256 _timestamp
   );

  struct Item {
    // Staking Address
    address borrower;

    // Cost to borrow
    uint256 cost;
  }
  mapping(address => mapping(uint256 => Item)) item;
  mapping(address => uint256) totalItems;

  function createItem (string memory itemName, string memory description, string memory imageUrl, uint256 location, uint256 maxDuration, uint256 cost)
    public
  {
    uint256 itemId = totalItems[msg.sender] + 1;
    item[msg.sender][itemId].cost = cost;

    emit OnCreateItem(
      msg.sender,
      itemName,
      description,
      imageUrl,
      location,
      maxDuration,
      cost,
      block.timestamp
    );
  }
  
  function getItem(address lender, uint256 itemId)
    public
    view
    returns(address, uint256)
  {
      address borrower = item[lender][itemId].borrower;
      uint256 cost = item[lender][itemId].cost;
      
      return (borrower, cost);
  }

   function borrow (address lender, uint256 itemId)
     public
     payable
   {
        uint256 cost = item[lender][itemId].cost;
        require(msg.value == cost);
       
        item[lender][itemId].borrower = msg.sender;

        emit OnBorrow(
          msg.sender,
          lender,
          itemId,
          block.timestamp
        );
   }
}