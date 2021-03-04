import React, { useEffect, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { obj } from "./config";

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400
  },
  red: {
    color: "red"
  }
});

export default function RecursiveTreeView() {
  const classes = useStyles();
  let x1 = "tYyM_1";

  const renderTree = (list = []) => {
    return (
      <TreeItem nodeId={"12"} label="DOM">
        {list.map((item, i) => renderNode(item))}
      </TreeItem>
    );
  };
  const renderNode = (single_node) => {
    return (
      <TreeItem
        className={x1 == single_node.id ? classes.red : ""}
        key={single_node.id}
        nodeId={single_node.id}
        label={`${single_node.id}#${
          single_node.name ? single_node.name : "Wrapper"
        }`}
        data-ss={`${single_node.id}#${
          single_node.name ? single_node.name : "Wrapper"
        }`}
        onLabelClick={(e) => {
          e.preventDefault();
          console.log(
            `${single_node.id}#${
              single_node.name ? single_node.name : "Wrapper"
            }`
          );
        }}
        classes={classes.red}
      >
        {single_node.props && Array.isArray(single_node.props.children)
          ? single_node.props.children.map((node) => renderNode(node))
          : null}
      </TreeItem>
    );
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(obj.creation)}
    </TreeView>
  );
}
