import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { obj } from "./config";

const data = {
  id: "root",
  name: "Parent",
  children: [
    {
      id: "1",
      name: "Child - 1"
    },
    {
      id: "3",
      name: "Child - 3",
      children: [
        {
          id: "4",
          name: "Child - 4"
        }
      ]
    }
  ]
};

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400
  }
});
const renderTree = (list = []) => {
  return (
    <TreeItem nodeId={"12"} label="DOM">
      {list.map((item, i) => renderNode(item))}
    </TreeItem>
  );
};
const renderNode = (single_node) => {
  console.log(single_node);
  return (
    <TreeItem
      key={single_node.id}
      nodeId={single_node.id}
      label={`${single_node.id}#${
        single_node.name ? single_node.name : "Wrapper"
      }`}
    >
      {single_node.props && Array.isArray(single_node.props.children)
        ? single_node.props.children.map((node) => renderNode(node))
        : null}
    </TreeItem>
  );
};
export default function RecursiveTreeView() {
  const classes = useStyles();

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
