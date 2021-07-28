import React from "react";
import Button from "./Button";
import "./twit.css";

export default function Twits() {
  return (
    <>
      <div className="twit">
        <div className="twit_item twit_header">
          <div className="twit_header__item twit_header__name">
            Iana Alekseeva
          </div>
          <div className="twit_header__item twit_header__username">
            @alekseevayana
          </div>
          <div className="twit_header__item twit_header__date">17.06.21</div>
        </div>
        <div className="twit_item twit_text">
          Today I’ve learned some Figma basics!
        </div>
        <div className="twit_item twit_actions">
          <div className="twit_actions__item">
            <Button className="button_link__edit" type="button_link">
              Edit
            </Button>
            <Button type="button_link" className="button_link__delete">
              Delete
            </Button>
          </div>
          <div className="twit_actions__item">
            <Button type="button_link">Comment</Button>
            <Button type="button_link">Like</Button>
          </div>
        </div>
      </div>

      <div className="twit">
        <div className="twit_item twit_header">
          <div className="twit_header__item twit_header__name">
            Iana Alekseeva
          </div>
          <div className="twit_header__item twit_header__username">
            @alekseevayana
          </div>
          <div className="twit_header__item twit_header__date">17.06.21</div>
        </div>
        <div className="twit_item twit_text">
          Today I’ve learned some Figma basics!
        </div>
        <div className="twit_item twit_actions">
          <div className="twit_actions__item">
            <Button className="button_link__edit" type="button_link">
              Edit
            </Button>
            <Button type="button_link" className="button_link__delete">
              Delete
            </Button>
          </div>
          <div className="twit_actions__item">
            <Button type="button_link">Comment</Button>
            <Button type="button_link">Like</Button>
          </div>
        </div>
      </div>

      <div className="twit">
        <div className="twit_item twit_header">
          <div className="twit_header__item twit_header__name">
            Iana Alekseeva
          </div>
          <div className="twit_header__item twit_header__username">
            @alekseevayana
          </div>
          <div className="twit_header__item twit_header__date">17.06.21</div>
        </div>
        <div className="twit_item twit_text">
          Today I’ve learned some Figma basics!
        </div>
        <div className="twit_item twit_actions">
          <div className="twit_actions__item">
            <Button className="button_link__edit" type="button_link">
              Edit
            </Button>
            <Button type="button_link" className="button_link__delete">
              Delete
            </Button>
          </div>
          <div className="twit_actions__item">
            <Button type="button_link">Comment</Button>
            <Button type="button_link">Like</Button>
          </div>
        </div>
      </div>

      <div className="twit">
        <div className="twit_item twit_header">
          <div className="twit_header__item twit_header__name">
            Iana Alekseeva
          </div>
          <div className="twit_header__item twit_header__username">
            @alekseevayana
          </div>
          <div className="twit_header__item twit_header__date">17.06.21</div>
        </div>
        <div className="twit_item twit_text">
          Today I’ve learned some Figma basics!
        </div>
        <div className="twit_item twit_actions">
          <div className="twit_actions__item">
            <Button className="button_link__edit" type="button_link">
              Edit
            </Button>
            <Button type="button_link" className="button_link__delete">
              Delete
            </Button>
          </div>
          <div className="twit_actions__item">
            <Button type="button_link">Comment</Button>
            <Button type="button_link">Like</Button>
          </div>
        </div>
      </div>
    </>
  );
}
