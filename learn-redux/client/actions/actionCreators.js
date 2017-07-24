//Increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

//Add comment
export function addComment(postID, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

//Remove comment
export function removeComment (postID, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}