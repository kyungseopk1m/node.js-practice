// 25-1
// 이벤트로 payload의 값을 넘길 경우 raw값 보다는 해시값을 넘겨줘라. 이렇게 하면 이후 기여자가 이벤트에 관련한
// 모든 핸들러를 찾아서 바꾸는 대신 이벤트 payload에 값을 추가할 수 있다.

// bad
$(this).trigger('listingUpdated', listing.id);

// ...

$(this).on('listingUpdated', (e, listingID) => {
    // do something with listingID
});

// good
$(this).trigger('listingUpdated', { listingID: listing.id });

// ...

$(this).on('listingUpdated', (e, data) => {
    // do something with data.listingID
});