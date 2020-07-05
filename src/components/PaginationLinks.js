import React from "react"
import { Pagination, PaginationItem } from "reactstrap"
import { Link } from "gatsby"
import { FaArrowRight, FaArrowLeft, FaUnlink } from "react-icons/fa"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? "/blog/1" : "/blog/" + (currentPage - 1).toString()
  const nextPage = "/blog/" + (currentPage + 1).toString()
  return (
    <Pagination aria-label="Page navigation example">
      {isFirst ? (
        <div style={{ marginRight: "9px" }}>
          <PaginationItem>
            <p
              style={{
                fontFamily: "Helvetica",
                color: "grey",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {" "}
              <FaUnlink />
            </p>
          </PaginationItem>
        </div>
      ) : (
        <div style={{ marginRight: "9px" }}>
          <PaginationItem>
            <Link to={previousPage}>
              <p
                style={{
                  fontFamily: "Helvetica",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <FaArrowLeft />
              </p>
            </Link>
          </PaginationItem>
        </div>
      )}
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <div style={{ margin: "0 3px" }}>
            <PaginationItem active key={`page-number${i + 1}`}>
              <Link to={`/${i === 0 ? "blog/1" : "blog/" + (i + 1)}`}>
                <p style={{ fontFamily: "Helvetica", color: "black" }}>
                  {" "}
                  {i + 1}
                </p>
              </Link>
            </PaginationItem>
          </div>
        ) : (
          <div style={{ fontFamily: "Helvetica", margin: "0 3px" }}>
            <PaginationItem key={`page-number${i + 1}`}>
              <Link to={`/${i === 0 ? "blog/1" : "blog/" + (i + 1)}`}>
                <p style={{ fontFamily: "Helvetica", color: "black" }}>
                  {" "}
                  {i + 1}
                </p>
              </Link>
            </PaginationItem>
          </div>
        )
      )}
      {isLast ? (
        <div style={{ marginLeft: "9px" }}>
          <PaginationItem>
            <p
              style={{
                fontFamily: "Helvetica",
                color: "grey",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {" "}
              <FaUnlink />
            </p>
          </PaginationItem>
        </div>
      ) : (
        <div style={{ marginLeft: "9px" }}>
          <PaginationItem>
            <Link to={nextPage}>
              <p
                style={{
                  fontFamily: "Helvetica",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <FaArrowRight />
              </p>
            </Link>
          </PaginationItem>
        </div>
      )}
    </Pagination>
  )
}

export default PaginationLinks
